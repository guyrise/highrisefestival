import { BsGithub, BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons";

const Credits = () => {
  return (
    <div className="page-wrapper">
      <div className="page">
        <div>
          <div className="website-section flex flex-col justify-center items-center mb-16">
            <h3 className="mb-6">Website By:</h3>

            <h5 className="text-2xl">Flynn Stacey</h5>

            <div className="w-64 flex justify-evenly my-3 ">
              <a href="https://github.com/Flynn-S" target="_blank">
                <IconContext.Provider
                  value={{ color: "#F77B00", size: "2rem" }}
                >
                  <BsGithub />
                </IconContext.Provider>
              </a>
              <a
                href="https://www.linkedin.com/in/flynn-stacey"
                target="_blank"
              >
                <IconContext.Provider
                  value={{ color: "#0A66C2", size: "2rem" }}
                >
                  <BsLinkedin />
                </IconContext.Provider>
              </a>
            </div>
          </div>
          <div className="website-section flex flex-col justify-center items-center">
            <h3 className="mb-6">Artwork By:</h3>
            <h5 className="text-2xl">Cameron Bain</h5>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Credits;
