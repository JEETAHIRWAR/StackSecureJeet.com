import React from "react";

const AboutForm = ({ formData = {}, updateFormData, onSaveAndNext }) => {
  const {
    name = "",
    email = "",
    mobile = "",
    profileImage = "",
    details = {},
    description = "",
  } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    updateFormData({
      ...formData,
      details: {
        ...details,
        [name]: value,
      },
    });
  };

  const handleSaveAndNext = () => {
    onSaveAndNext();
  };

  return (
    <div className="p-6 grid-cols-3 grid justify-center ml-16">
      <div className="relative mb-8">
        <label
          className="absolute top-[-15px] left-1 bg-black text-green-400 px-3 py-[1px] rounded-t-md"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="bg-black text-green-400 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleInputChange}
          placeholder="Enter your name"
        />
      </div>

      <div className="relative mb-8">
        <label
          className="absolute top-[-15px] left-1 bg-black text-green-400 px-3 py-[1px] rounded-t-md"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="bg-black text-green-400 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Enter your email"
        />
      </div>

      <div className="relative mb-8">
        <label
          className="absolute top-[-15px] left-1 bg-black text-green-400 px-3 py-[1px] rounded-t-md"
          htmlFor="mobile"
        >
          Mobile
        </label>
        <input
          className="bg-black text-green-400 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
          type="text"
          name="mobile"
          value={mobile}
          onChange={handleInputChange}
          placeholder="Enter your mobile"
        />
      </div>

      <div className="relative mb-8">
        <label
          className="absolute top-[-15px] left-1 bg-black text-green-400 px-3 py-[1px] rounded-t-md"
          htmlFor="profileImage"
        >
          Profile Image
        </label>
        <input
          className="bg-black text-green-400 w-[215px] border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
          type="file"
          accept="image/*"
          name="profileImage"
          value={profileImage}
          onChange={handleInputChange}
          placeholder="Profile Image"
        />
      </div>

      <div className="relative mb-8">
        <label
          className="absolute top-[-15px] left-1 bg-black text-green-400 px-3 py-[1px] rounded-t-md"
          htmlFor="bio"
        >
          Bio
        </label>
        <input
          className="bg-black text-green-400 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
          type="text"
          name="bio"
          value={details.bio || ""}
          onChange={handleDetailsChange}
          placeholder="Bio"
        />
      </div>

      <div className="relative mb-8">
        <label
          className="absolute top-[-15px] left-1 bg-black text-green-400 px-3 py-[1px] rounded-t-md"
          htmlFor="website"
        >
          website
        </label>
        <input
          className="bg-black text-green-400 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
          type="text"
          name="website"
          value={details.website || ""}
          onChange={handleDetailsChange}
          placeholder="Website"
        />
      </div>
      <div className="relative mb-8">
        <label
          className="absolute top-[-15px] left-1 bg-black text-green-400 px-3 py-[1px] rounded-t-md"
          htmlFor="address"
        >
          Address
        </label>
        <input
          className="bg-black text-green-400 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
          type="text"
          name="address"
          value={details.address || ""}
          onChange={handleDetailsChange}
          placeholder="Address"
        />
      </div>
      <div className="relative mb-8">
        <label
          className="absolute top-[-15px] left-1 bg-black text-green-400 px-3 py-[1px] rounded-t-md"
          htmlFor="digitalSignature"
        >
          Digital Signature
        </label>
        <input
          className="bg-black text-green-400 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
          type="text"
          name="digitalSignature"
          value={details.digitalSignature || ""}
          onChange={handleDetailsChange}
          placeholder="Digital Signature"
        />
      </div>

      <div className="relative mb-8">
        <label
          className="absolute top-[-15px] left-1 bg-black text-green-400 px-3 py-[1px] rounded-t-md"
          htmlFor="twitter"
        >
          Twitter Link
        </label>
        <input
          className="bg-black text-green-400 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
          type="text"
          name="twitter"
          value={details.twitter || ""}
          onChange={(e) =>
            handleDetailsChange({
              target: {
                name: "twitter",
                value: e.target.value,
              },
            })
          }
          placeholder="Twitter Link"
        />
      </div>

      <div className="relative mb-8">
        <label
          className="absolute top-[-15px] left-1 bg-black text-green-400 px-3 py-[1px] rounded-t-md"
          htmlFor="linkedin"
        >
          linkedin Link
        </label>
        <input
          className="bg-black text-green-400 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
          type="text"
          name="linkedin"
          value={details.linkedin || ""}
          onChange={(e) =>
            handleDetailsChange({
              target: {
                name: "linkedin",
                value: e.target.value,
              },
            })
          }
          placeholder="linkedin Link"
        />
      </div>

      <div className="relative mb-8">
        <label
          className="absolute top-[-15px] left-1 bg-black text-green-400 px-3 py-[1px] rounded-t-md"
          htmlFor="github"
        >
          Github Link
        </label>
        <input
          className="bg-black text-green-400 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
          type="text"
          name="github"
          // value={details.social_media?.github || ""}
          value={details.github || ""}
          onChange={(e) =>
            handleDetailsChange({
              target: {
                name: "github",
                value: e.target.value,
              },
            })
          }
          placeholder="Github link"
        />
      </div>

      <div className="relative mb-8">
        <label
          className="absolute top-[-15px] left-1 bg-black text-green-400 px-3 py-[1px] rounded-t-md"
          htmlFor="instagram"
        >
          instagram
        </label>
        <input
          className="bg-black text-green-400 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
          type="text"
          name="instagram"
          value={details.instagram || ""}
          onChange={(e) =>
            handleDetailsChange({
              target: {
                name: "instagram",
                value: e.target.value,
              },
            })
          }
          placeholder="instagram"
        />
      </div>

      <div className="relative mb-8">
        <label
          className="absolute top-[-15px] left-1 bg-black text-green-400 px-3 py-[1px] rounded-t-md"
          htmlFor="facebook"
        >
          facebook
        </label>
        <input
          className="bg-black text-green-400 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
          type="text"
          name="facebook"
          value={details.facebook || ""}
          onChange={(e) =>
            handleDetailsChange({
              target: {
                name: "facebook",
                value: e.target.value,
              },
            })
          }
          placeholder="facebook"
        />
      </div>

      <div className="relative mb-8">
        <label
          className="absolute top-[-15px] left-1 bg-black text-green-400 px-3 py-[1px] rounded-t-md"
          htmlFor="other"
        >
          other
        </label>
        <input
          className="bg-black text-green-400 border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
          type="text"
          name="other"
          value={details.other || ""}
          onChange={(e) =>
            handleDetailsChange({
              target: {
                name: "other",
                value: e.target.value,
              },
            })
          }
          placeholder="other"
        />
      </div>

      <div className="relative mb-8">
        <label
          className="absolute top-[-15px] left-1 bg-black text-green-400 px-3 py-[1px] rounded-t-md"
          htmlFor="description"
        >
          Write about your-self
        </label>
        <textarea
          className="bg-black text-green-400 w-[215px] border-green-400 border-2 rounded-b-md px-4 py-2 focus:outline-none focus:border-green-500"
          name="description"
          value={description}
          onChange={handleInputChange}
          placeholder="Short Description"
        ></textarea>
      </div>

      <div>
        <button
          onClick={handleSaveAndNext}
          className="bg-black hover:bg-green-700 text-green-400 font-semibold py-2 px-4 rounded-md border-green-400 border-2 focus:outline-none focus:border-green-500 transition duration-300 ease-in-out"
        >
          Save and Next
        </button>
      </div>

      {/* <button onClick={handleSaveAndNext}>Save and Next</button> */}
    </div>
  );
};

export default AboutForm;
