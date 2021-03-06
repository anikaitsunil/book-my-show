import { Disclosure } from '@headlessui/react'
import {BiChevronDown,BiChevronUp} from "react-icons/bi";

const PlaysFilter = (props) => {
  return (
      <div className="bg-gray-100 px-2 py-4 mb-3 px-4 rounded-md"> 
    <Disclosure>
        {({ open }) => (
            <>
            <Disclosure.Button className="py-1 flex items-center gap-3 mb-3">
                {open ? <BiChevronUp /> : <BiChevronDown />}
                <span className={open? "text-red-600" : "text-gray-700 text-sm"}>
                {props.title}
                </span>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500">
                <div className="flex items-center gap-3 flex-wrap">
                    {
                        props.tags.map((tag) => (
                            <>
                            <div className="border-2 border-gray-200 p-2">
                                <span className="text-red-600 text-sm">
                                    {tag}
                                </span>
                            </div>
                            </>
                        ))
                    }
                </div>
            </Disclosure.Panel>
            </>
        )}
    </Disclosure>
    </div>
  );
};

export default PlaysFilter;