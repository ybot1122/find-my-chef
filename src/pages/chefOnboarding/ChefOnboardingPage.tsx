import React from "react";
import { ChefOnboardingStepOne } from "../../components/chefOnboardingSteps/stepOne/chefOnboardingStepOne";
import { ChefOnboardingStepTwo } from "../../components/chefOnboardingSteps/stepTwo/chefOnboardingStepTwo";
import { ChefOnboardingStepThree } from "../../components/chefOnboardingSteps/stepThree/chefOnboardingStepThree";

const ChefOnboardingPage = () => {
  const [currentStep, setCurrentStep] = React.useState(0);

  return (
    <section>
      <h2>Chef Onboarding!</h2>
      <h3>As a chef here is how I will create my account...</h3>

      <div>
        <div>
          <div>Select Cuisines</div>
          <div>Link Social Media</div>
          <div>Make First Post</div>
        </div>

        {currentStep === 0 && <ChefOnboardingStepOne />}
        {currentStep === 1 && <ChefOnboardingStepTwo />}
        {currentStep === 2 && <ChefOnboardingStepThree />}
      </div>
    </section>
  );
};

export { ChefOnboardingPage };
