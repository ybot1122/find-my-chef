import React, { useCallback } from "react";
import * as css from "./ChefOnboardingPage.css";
import { ChefOnboardingStepOne } from "../../components/chefOnboardingSteps/stepOne/chefOnboardingStepOne";
import { ChefOnboardingStepTwo } from "../../components/chefOnboardingSteps/stepTwo/chefOnboardingStepTwo";
import { ChefOnboardingStepThree } from "../../components/chefOnboardingSteps/stepThree/chefOnboardingStepThree";
import classNames from "classnames";

const ChefOnboardingPage = () => {
  const [currentStep, setCurrentStep] = React.useState(0);

  const goToNextStep = useCallback(
    () => setCurrentStep(currentStep + 1),
    [currentStep]
  );
  const goToPrevStep = useCallback(
    () => setCurrentStep(currentStep - 1),
    [currentStep]
  );

  return (
    <>
      <section>
        <div className={css.onboardingSteps}>
          <h2>Chef Onboarding!</h2>
          <div
            className={classNames(css.onboardingStep, {
              [css.activeStep]: currentStep === 0,
            })}
          >
            Select Cuisines
          </div>
          <div
            className={classNames(css.onboardingStep, {
              [css.activeStep]: currentStep === 1,
            })}
          >
            Link Social Media
          </div>
          <div
            className={classNames(css.onboardingStep, {
              [css.activeStep]: currentStep === 2,
            })}
          >
            Make First Post
          </div>
        </div>
      </section>
      <section>
        <div className={css.container}>
          {currentStep === 0 && <ChefOnboardingStepOne />}
          {currentStep === 1 && <ChefOnboardingStepTwo />}
          {currentStep === 2 && <ChefOnboardingStepThree />}
        </div>

        <div className={css.goToContainer}>
          <div className={css.goToPrevStep}>
            <button onClick={goToPrevStep} disabled={currentStep === 0}>
              Go To Previous Step
            </button>
          </div>
          <div className={css.goToNextStep}>
            <button onClick={goToNextStep} disabled={currentStep === 2}>
              Go To Next Step
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export { ChefOnboardingPage };
