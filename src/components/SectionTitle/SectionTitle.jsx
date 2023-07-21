import { Fade, Slide } from "react-awesome-reveal";


const SectionTitle = ({ title, heading }) => {
    return (
        <>


            <Fade cascade>
                <div className="mt-16 mx-auto text-center">

                    <Slide>
                        <h1 className="text-5xl font-bold">{title}<span
                            className="text-red-500"></span></h1>
                    </Slide>
                    <p className="py-6 w-9/12 mx-auto">{heading}</p>
                    <div className="divider"></div>
                </div>
            </Fade>
        </>

    );
};

export default SectionTitle;