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
    <section>
      <h2>Chef Onboarding!</h2>
      <h3>As a chef here is how I will create my account...</h3>

      <div>
        <div className={css.onboardingSteps}>
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

        {currentStep === 0 && <ChefOnboardingStepOne />}
        {currentStep === 1 && <ChefOnboardingStepTwo />}
        {currentStep === 2 && <ChefOnboardingStepThree />}

        <button onClick={goToPrevStep} disabled={currentStep === 0}>
          Go To Previous Step
        </button>
        <button onClick={goToNextStep} disabled={currentStep === 2}>
          Go To Next Step
        </button>
      </div>
    </section>
  );
};

export { ChefOnboardingPage };
