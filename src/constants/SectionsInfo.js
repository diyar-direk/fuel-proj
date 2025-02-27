import { ReactComponent as VehicleIcon } from "src/assets/icons/vehicle.svg";
import { ReactComponent as AgricultureIcon } from "src/assets/icons/agriculture.svg";

const sectionsInfo = {
  vehicle: {
    icon: VehicleIcon,
    name: "vehicle",
    label: "آليات",
    pages: {
      vehiclesRecord: {
        label: "آليات",
        to: "/vehicles-record",
      },
      vehiclesPrint: {
        label: "الطباعة",
        to: "/vehicles-print",
      },
      staions: { label: "محطات" },
    },
  },
  agriculture: {
    icon: AgricultureIcon,
    name: "agriculture",
    label: "زراعي",
    pages: [],
  },
};

export const { agriculture, vehicle } = sectionsInfo;

export const { vehiclesRecord, vehiclesPrint } = vehicle.pages;

export default sectionsInfo;
