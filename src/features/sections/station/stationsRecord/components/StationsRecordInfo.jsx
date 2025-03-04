import { memo, useCallback } from "react";
import Accordion from "src/components/accordion/Accordion";
import LabeledTextBox from "src/components/LabeledTextBox";
import useCashingState from "src/hooks/useCashingState";

function StationsRecordInfo() {
  const [accordion, setAccordion] = useCashingState(
    "StationsRecordInfoAccordion",
    {
      stationInfo: true,
      stationDocuments: false,
    }
  );

  const handleChange = useCallback(
    (e) => {
      const name = e.target.name;
      const value = e.target.value;

      setAccordion((accordion) => ({ ...accordion, [name]: value }));
    },
    [setAccordion]
  );

  return (
    <div className="ms-10 mt-8">
      <Accordion
        title="معلومات المحطة"
        onChange={handleChange}
        name="stationInfo"
        expand={accordion.stationInfo}
      >
        <div className="flex flex-col w-full gap-5">
          <LabeledTextBox label="اسم المحطة">حمزة ناصر</LabeledTextBox>
          <LabeledTextBox label="رقم الهاتف">0999999999</LabeledTextBox>
          <LabeledTextBox label="المالك">أحمد هشام ابن شعيل</LabeledTextBox>
          <LabeledTextBox label="المجلس">مجلس 1</LabeledTextBox>
        </div>
      </Accordion>

      <Accordion
        title="وثائق المحطة"
        onChange={handleChange}
        name="stationDocuments"
        expand={accordion.stationDocuments}
      >
        <div className="flex flex-col w-full gap-5">
          <LabeledTextBox label="اسم المحطة">حمزة ناصر</LabeledTextBox>
          <LabeledTextBox label="رقم الهاتف">0999999999</LabeledTextBox>
          <LabeledTextBox label="المالك">أحمد هشام ابن شعيل</LabeledTextBox>
          <LabeledTextBox label="المجلس">مجلس 1</LabeledTextBox>
        </div>
      </Accordion>
    </div>
  );
}

export default memo(StationsRecordInfo);
