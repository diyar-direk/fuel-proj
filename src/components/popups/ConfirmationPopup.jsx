import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Fragment } from "react";

/*
  ConfirmationPopup Component Usage:
  -----------------------------------
  Props:
  - isOpen (boolean): Controls the visibility of the popup. Set to 'true' to show and 'false' to hide.
  - onClose (function): A callback function to close the popup.

  How to Use:
  1. Import the component: `import ConfirmationPopup from './ConfirmationPopup';`
  2. Manage state in a parent component using useState like: const [isPopupOpen, setPopupOpen] = useState(false)
  3. Add a button to trigger the popup: <button onClick={() => setPopupOpen(true)}>Show Popup</button>
  5. Enter a title as a prop.
  4. Render the popup component at the end of the parent component: <ConfirmationPopup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
  Example:

  const [isPopupOpen, setPopupOpen] = useState(false);
  <button className="px-6 py-2 bg-green-600 text-white rounded-lg"
    onClick={() => setPopupOpen(true)}>
        اضغط هنا
  </button>
          
  <ConfirmationPopup
    isOpen={isPopupOpen}
    onClose={() => setPopupOpen(false)}
    title={"هل أنت متأكد أنك تريد القيام بهذا الإجراء؟"}
  />
*/
export default function ConfirmationPopup({ isOpen, onClose, title }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-30" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="w-full max-w-md bg-white rounded-lg p-6 shadow-lg font-[Calibri]">
              <DialogTitle className="text-center font- text-lg font-medium text-gray-900">
                {title}
              </DialogTitle>
              <div className="mt-4 flex justify-center gap-4">
                <button
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg"
                  onClick={onClose}
                >
                  متأكد
                </button>
                <button
                  className="px-6 py-2 border-2 border-red-500 text-red-500 rounded-lg"
                  onClick={onClose}
                >
                  إلغاء الأمر
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}
