import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const price = form.price.value;
    const photo = form.photo.value;

    const coffeeDetails = {
      name,
      chef,
      supplier,
      taste,
      category,
      price,
      photo,
    };

    console.log(coffeeDetails);

    fetch(
      "https://coffee-store-server-8a2olim4d-mdhossain07.vercel.app/coffee",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(coffeeDetails),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire("Great", "Coffee added successfully!", "success");
          form.reset();
        }
      });
  };
  return (
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <div className="bg-[#F4F3F0]">
        {/* Text */}
        <div className="text-center">
          <h2>Add Coffee</h2>
          <p className="w-[800px] mx-auto">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row justify-center md:gap-32">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-[#3E2F2E] font-semibold">
                  Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter coffee name"
                className="input input-bordered w-full max-w-xs"
                name="name"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-[#3E2F2E] font-semibold">
                  Chef
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter coffee chef"
                className="input input-bordered w-full max-w-xs"
                name="chef"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:gap-32">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-[#3E2F2E] font-semibold">
                  Supplier
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full max-w-xs"
                name="supplier"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-[#3E2F2E] font-semibold">
                  Taste
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter coffee taste"
                className="input input-bordered w-full max-w-xs"
                name="taste"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:gap-32">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-[#3E2F2E] font-semibold">
                  Category
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter coffee category"
                className="input input-bordered w-full max-w-xs"
                name="category"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-[#3E2F2E] font-semibold">
                  Price
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter coffee price"
                className="input input-bordered w-full max-w-xs"
                name="price"
              />
            </div>
          </div>
          <div className="">
            <div className="form-control w-9/12 max-w-xs">
              <label className="label">
                <span className="label-text text-[#3E2F2E] font-semibold">
                  Photo
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter photo URL"
                className="input input-bordered w-full max-w-xs"
                name="photo"
              />
            </div>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"></label>
            <input
              type="submit"
              value="Add Coffee"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
