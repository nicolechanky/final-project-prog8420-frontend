import { Listbox } from '@headlessui/react';
import React, { useState, Fragment } from 'react';
import { CategoriesData } from '../Data/CategoriesData';
import { FaAngleDown, FaCheck } from 'react-icons/fa';

const YearData = [
  { title: 'Sort By Year' },
  { title: '1700 - 1800' },
  { title: '1800 - 1900' },
  { title: '1900 - 2000' },
  { title: '2000 - 2010' },
  { title: '2010 - 2030' },
];

const RatesData = [
  { title: 'Sort By Rates' },
  { title: '1 Star' },
  { title: '2 Star' },
  { title: '3 Star' },
  { title: '4 Star' },
  { title: '5 Star' },
];

const ProducerData = [
  { title: 'Zack Snyder' },
  { title: 'James Wan' },
  { title: 'Justin Baldoni' },
];

function Filters() {
  const [category, setCategory] = useState({ title: 'Category' });
  const [year, setYear] = useState(YearData[0]);
  const [rates, setRates] = useState(RatesData[0]);
  const [producer, setProducer] = useState(RatesData[0]);

  const Filter = [
    {
      value: category,
      onChange: setCategory,
      items: CategoriesData,
    },
    {
      value: year,
      onChange: setYear,
      items: YearData,
    },
    {
      value: rates,
      onChange: setRates,
      items: RatesData,
    },
    {
      value: producer,
      onChange: setProducer,
      items: ProducerData,
    },
  ];

  return (
    <div className="my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6">
      {Filter.map((item, index) => (
        <Listbox key={index} value={item.value} onChange={item.onChange}>
          <div className="relative">
            <Listbox.Button className="relative border border-gray-800  w-full text-white bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs">
              <span className="block truncate">{item.value.title}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-2">
                <FaAngleDown className="h-4 w-4" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-800 text-dryGray rounded-md shadow-lg max-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
              {item.items.map((item, i) => (
                <Listbox.Option
                  key={i}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-subMain text-white' : 'text-main'
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncated ${
                          selected ? 'font-semibold' : 'font-normal'
                        }`}
                      >
                        {item.title}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                          <FaCheck className="h-3 w-3" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
      ))}
    </div>
  );
}

export default Filters;
