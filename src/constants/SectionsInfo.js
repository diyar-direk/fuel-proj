import { ReactComponent as VehicleIcon } from "src/assets/icons/vehicle.svg";
import { ReactComponent as AgricultureIcon } from "src/assets/icons/agriculture.svg";
import { ReactComponent as StationIcon } from "src/assets/icons/station.svg";

/**
 * @type {{[x:string]:{icon: React.FunctionComponent<React.SVGProps<SVGSVGElement> & {title?: string;}>, name: string, label: string, pages:{[x:string]:{label: string,to: string}}}}}
 */
const sectionsInfo = {
  vehicle: {
    icon: VehicleIcon,
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
    },
  },
  agriculture: {
    icon: AgricultureIcon,
    label: "زراعي",
    pages: {},
  },
  station: {
    icon: StationIcon,
    label: "محطات",
    pages: { stationsRecord: { label: "المحطات", to: "/stations-record" } },
  },
};

export const { agriculture, vehicle, station } = sectionsInfo;

export const { vehiclesRecord, vehiclesPrint } = vehicle.pages;

export const { stationsRecord } = station.pages;

export default sectionsInfo;
