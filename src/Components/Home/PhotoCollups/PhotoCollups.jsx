import cImg1 from "../../../assets/cups/Rectangle 10.png";
import cImg2 from "../../../assets/cups/Rectangle 11.png";
import cImg3 from "../../../assets/cups/Rectangle 12.png";
import cImg4 from "../../../assets/cups/Rectangle 13.png";
import cImg5 from "../../../assets/cups/Rectangle 14.png";
import cImg6 from "../../../assets/cups/Rectangle 15.png";
import cImg7 from "../../../assets/cups/Rectangle 16.png";
import cImg8 from "../../../assets/cups/Rectangle 9.png";

const PhotoCollups = () => {
  return (
    <div className="my-36">
      <div className="text-center text-[#967259]">
        <h3 className="text-xl">Follow Us Now</h3>
        <h1 className="" style={{ fontFamily: "var(--Head--Font)" }}>
          FOllow ON Instagram
        </h1>
      </div>
      <div className="w-[80%] my-20 mx-auto columns-2 md:columns-4 gap-y-3">
        <div className="mb-4 col_img overflow-hidden">
          <img src={cImg1} alt="cup" />
        </div>
        <div className="mb-4 col_img overflow-hidden">
          <img src={cImg2} alt="cup" />
        </div>
        <div className="mb-4 col_img overflow-hidden">
          <img src={cImg3} alt="cup" />
        </div>
        <div className="mb-4 col_img overflow-hidden">
          <img src={cImg4} alt="cup" />
        </div>
        <div className="mb-4 col_img overflow-hidden">
          <img src={cImg5} alt="cup" />
        </div>
        <div className="mb-4 col_img overflow-hidden">
          <img src={cImg6} alt="cup" />
        </div>
        <div className="mb-4 col_img overflow-hidden">
          <img src={cImg7} alt="cup" />
        </div>
        <div className="mb-4 col_img overflow-hidden">
          <img src={cImg8} alt="cup" />
        </div>
      </div>
    </div>
  );
};

export default PhotoCollups;
