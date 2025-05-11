import { FILTERS_BUTTONS } from "../consts";
import { type FilterValue } from "../types.d";

interface Props {
  filterSelected: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
}

export const Filters: React.FC<Props> = ({
  filterSelected,
  onFilterChange,
}) => {
  return (
    <ul className="filters flex border-b border-gray-200 m-0 pl-3.5">
      {Object.entries(FILTERS_BUTTONS).map(([key, { label, href }]) => {
        const isSelected = key === filterSelected;
        const className = isSelected
          ? "border-b-2 border-[#b83f45] shadow-none text-neutral-700"
          : "";
        return (
          <li key={key} className={`${className} px-4 py-2 text-[18px] font-[500] text-neutral-400`}>
            <a
              href={href}
              onClick={(e) => {
                e.preventDefault();
                onFilterChange(key as FilterValue);
              }}
            >
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
