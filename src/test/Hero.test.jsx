import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Hero from "../components/Hero";

// Mock Three.js and its modules
vi.mock("three", () => {
  const Scene = vi.fn(() => ({ add: vi.fn() }));
  const WebGLRenderer = vi.fn(() => ({
    outputColorSpace: null,
    toneMapping: null,
    toneMappingExposure: null,
    shadowMap: { enabled: false, type: null },
    setSize: vi.fn(),
    setPixelRatio: vi.fn(),
    render: vi.fn(),
    dispose: vi.fn(),
    domElement: document.createElement("canvas"),
  }));
  const RectAreaLight = vi.fn(() => ({
    position: { set: vi.fn() },
    rotation: { set: vi.fn() },
  }));
  const DirectionalLight = vi.fn(() => ({
    position: { set: vi.fn() },
    castShadow: false,
    shadow: {
      mapSize: { width: 0, height: 0 },
      camera: { near: 0, far: 0, left: 0, right: 0, top: 0, bottom: 0 },
    },
  }));
  const AmbientLight = vi.fn(() => ({}));
  const PerspectiveCamera = vi.fn(() => ({
    aspect: 1,
    position: { set: vi.fn() },
    updateProjectionMatrix: vi.fn(),
  }));

  return {
    Scene,
    WebGLRenderer,
    RectAreaLight,
    DirectionalLight,
    AmbientLight,
    PerspectiveCamera,
    SRGBColorSpace: "srgb",
    ACESFilmicToneMapping: 4,
    PCFSoftShadowMap: 2,
  };
});

vi.mock("three/examples/jsm/controls/OrbitControls", () => ({
  OrbitControls: vi.fn(() => ({
    enableZoom: true,
    enablePan: true,
    update: vi.fn(),
    dispose: vi.fn(),
  })),
}));

vi.mock("three/examples/jsm/loaders/GLTFLoader", () => ({
  GLTFLoader: vi.fn(() => ({
    load: vi.fn(), // don't invoke callback — simulates pending load
  })),
}));

// Helper to control WebGL availability
const mockGetContext = (available) => {
  vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockImplementation(
    (type) => {
      if ((type === "webgl" || type === "experimental-webgl") && available) {
        return {}; // truthy = WebGL supported
      }
      return null;
    },
  );
};

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Hero — static content", () => {
  it("renders the club name heading", () => {
    mockGetContext(false);
    render(<Hero />);
    expect(
      screen.getByText("Alternate Reality Initiative"),
    ).toBeInTheDocument();
  });

  it("renders the university name heading", () => {
    mockGetContext(false);
    render(<Hero />);
    expect(screen.getByText("University of Michigan")).toBeInTheDocument();
  });

  it("wraps content in a .hero container", () => {
    mockGetContext(false);
    const { container } = render(<Hero />);
    expect(container.querySelector(".hero")).toBeInTheDocument();
  });
});

describe("Hero — WebGL available", () => {
  it("renders the Vectary iframe", () => {
    mockGetContext(true);
    render(<Hero />);
    const iframe = screen.getByTitle
      ? document.querySelector("iframe")
      : document.querySelector("iframe");
    expect(iframe).toBeInTheDocument();
  });

  it("iframe points to the correct Vectary URL", () => {
    mockGetContext(true);
    render(<Hero />);
    const iframe = document.querySelector("iframe");
    expect(iframe.src).toContain("app.vectary.com");
  });

  it("iframe has xr-spatial-tracking in allow attribute", () => {
    mockGetContext(true);
    render(<Hero />);
    const iframe = document.querySelector("iframe");
    expect(iframe.getAttribute("allow")).toContain("xr-spatial-tracking");
  });

  it("does not render the fallback image", () => {
    mockGetContext(true);
    render(<Hero />);
    expect(screen.queryByAltText("ARI hero fallback")).not.toBeInTheDocument();
  });
});

describe("Hero — WebGL unavailable", () => {
  it("renders the fallback image", () => {
    mockGetContext(false);
    render(<Hero />);
    expect(screen.getByAltText("ARI hero fallback")).toBeInTheDocument();
  });

  it("fallback image has the correct src", () => {
    mockGetContext(false);
    render(<Hero />);
    const img = screen.getByAltText("ARI hero fallback");
    expect(img.getAttribute("src")).toBe("/images/hero-fallback.png");
  });

  it("does not render the Vectary iframe", () => {
    mockGetContext(false);
    render(<Hero />);
    expect(document.querySelector("iframe")).not.toBeInTheDocument();
  });
});
