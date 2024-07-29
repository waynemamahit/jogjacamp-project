import Card from "../components/Card";

export default function TestLayoutPage() {
  const images = [
    "photo-1625726411847-8cbb60cc71e6.webp",
    "photo-1609621838510-5ad474b7d25d.webp",
    "photo-1414694762283-acccc27bca85.webp",
    "photo-1665553365602-b2fb8e5d1707.webp",
  ];

  return (
    <div className="grid grid-cols-1 gap-3 p-3">
      <section className="grid grid-cols-1">
        <Card>
          <div className="carousel w-full rounded-box h-32 sm:h-40 md:h-75 lg:h-96 xl:h-96">
            {images.map((image, index) => {
              const count = index + 1;
              return (
                <div
                  key={"key" + count}
                  id={"slide" + count}
                  className="carousel-item relative w-full"
                >
                  <img
                    alt={"Image " + count}
                    src={"https://img.daisyui.com/images/stock/" + image}
                    className="w-full"
                  />
                  <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a
                      href={
                        "#slide" + (count === 1 ? images.length : count - 1)
                      }
                      className="btn btn-circle"
                    >
                      ❮
                    </a>
                    <a
                      href={
                        "#slide" + (count === images.length ? 1 : count + 1)
                      }
                      className="btn btn-circle"
                    >
                      ❯
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3">
        {[...Array(4)]
          .map((_, i) => i + 1)
          .map((v) => (
            <Card key={v}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
                accusamus nemo, quo officia quis repudiandae aliquam minus
                obcaecati natus unde error fugit rem modi ipsum veniam inventore
                ducimus illo dolor?
              </p>
            </Card>
          ))}
      </section>
    </div>
  );
}
