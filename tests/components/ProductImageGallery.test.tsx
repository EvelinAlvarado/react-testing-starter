import { render, screen } from "@testing-library/react";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  test("should render nothing if given an empty array", () => {
    render(<ProductImageGallery imageUrls={[]} />);
    // Verificar que no haya imágenes en el DOM
    expect(screen.queryByRole("img")).toBeNull();
    screen.debug(); // Opcional: muestra el estado actual del DOM
  });
  //otra forma de verificar en el DOM esta vacio
  test("should render nothing if given an empty array", () => {
    const { container } = render(<ProductImageGallery imageUrls={[]} />);
    // Verificar que no haya imágenes en el DOM
    expect(container).toBeEmptyDOMElement();
    screen.debug(); // Opcional: muestra el estado actual del DOM
  });
  test("should render a list if imagesUrls", () => {
    const urls: string[] = ["image1.jpg", "image2.jpg"];
    render(<ProductImageGallery imageUrls={urls} />);

    // Obtener todas las imágenes
    const images = screen.getAllByRole("img");
    // Verificar que el número de imágenes es igual al número de URLs
    expect(images).toHaveLength(urls.length);
    urls.forEach((url, index) => {
      expect(images[index]).toHaveAttribute("src", url);
    });
    screen.debug();
  });
});
