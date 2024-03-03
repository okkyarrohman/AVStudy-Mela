import { Icon } from "@iconify/react";

const SearchInput = (props) => {
    return (
        <>
            <input
                type="text"
                name="search"
                className="py-2 w-full border border-gray-300 rounded text-sm"
                placeholder="Search from Activities"
                onChange={props.onChange}
            />
            <button onClick={props.onClick}>
                <Icon
                    className="text-xl absolute inset-y-2 right-4"
                    icon="mingcute:search-line"
                ></Icon>
            </button>
        </>
    );
};

export default SearchInput;
