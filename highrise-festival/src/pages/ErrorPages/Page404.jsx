import { useNavigate } from "react-router-dom";
import HighriseButton from "../../components/ui/Buttons/HighriseButton";

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <div id="404" className="flex flex-col justify-center py-52 px-52">
      <h1 className="mb-12 text-center">404 PAGE</h1>
      <p className="text-start px-24 mb-12">
        Sorry, the url you are searching for does not exist or is under
        maintenance.
        <br></br>
        <br></br>
        You can use the navigation bar above to find the page you're looking
        for, or you can go back to the previous page you were on by clicking the
        button below:
      </p>

      <HighriseButton
        label={"Go Back"}
        fontSize={"text-3xl"}
        onClick={() => navigate(-1)}
      />
    </div>
  );
};

export default Page404;
