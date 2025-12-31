"use client";

import { DialogClose } from "@/components/ui/dialog";
import DialogWidget from "@/components/widgets/DialogWidget";
import OrangeButtonWidget from "@/components/widgets/OrangeButtonWidget";
import { ArrowRight, Dummy1, Dummy2, Into } from "@/helpers/ImageHelper";
import ButtonWidget from "../../widgets/ButtonWidget";
import ImageWidget from "../../widgets/ImageWidget";
import ContactFormModalContent from "../../widgets/ContactFormModalContent";

type AdmissionButtonProps = {
  className?: string;
  iconClassName?: string;
};

const AdmissionButton = ({
  className = "",
  iconClassName = "",
}: AdmissionButtonProps) => {
  return (
    <DialogWidget
      trigger={
        <ButtonWidget className="orange-button ...">
          Enquire Now
          <ImageWidget src={ArrowRight} alt="Arrow Right" className="..." />
        </ButtonWidget>
      }
      contentClassName="sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px] p-4 sm:p-6 lg:p-6"
      showCancel={false}
      showCloseButton={false}
      customCloseButton={
        <DialogClose asChild>
          <div className="cursor-pointer -mt-[30px] -mr-[30px]">
            <ImageWidget src={Into} alt="Into" className="w-[30px] h-[30px]" />
          </div>
        </DialogClose>
      }
    >
      <ContactFormModalContent />
    </DialogWidget>
  );
};

export default AdmissionButton;
