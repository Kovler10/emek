import React, { createContext, useState, useMemo, useContext } from "react";
import { compact, uniq, difference, intersection } from "lodash";

const ListContextProvider = (props) => {
  const { listA: initialListA, listB: initialListB, children } = props;

  const [listA, setListA] = useState(initialListA);
  const [listB, setListB] = useState(initialListB);

  const listSetters = [setListA, setListB];

  const onlyAValues = useMemo(
    () => difference(compact(uniq(listA)), compact(uniq(listB))),
    [listA, listB]
  );
  const onlyBValues = useMemo(
    () => difference(compact(uniq(listB)), compact(uniq(listA))),
    [listA, listB]
  );
  const inBothValues = useMemo(
    () => intersection(compact(uniq(listB)), compact(uniq(listA))),
    [listA, listB]
  );

  const listGetters = [onlyAValues, onlyBValues, inBothValues];

  const setListByIndex = (value, index) => {
    if (index === -1 || !listSetters) {
      return;
    }
    listSetters[index](value);
  };

  const getListByIndex = (index) => {
    return listGetters[index];
  };

  const listContext = {
    setListByIndex,
    getListByIndex,
  };

  return <Context.Provider value={listContext}>{children}</Context.Provider>;
};

ListContextProvider.defaultProps = {
  listA: [],
  listB: [],
};

const Context = createContext({});
const useListContext = () => useContext(Context);
export { ListContextProvider, useListContext };
