import React, { createContext, useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import _ from 'lodash'
export const Context = createContext({});

export const Provider = props => {

  // Initial values are obtained from the props
  const {
    listA: initialListA,
    listB: initialListB,
    children
  } = props;

  // Use State to keep the values
  const [listA, setListA] = useState(initialListA);
  const [listB, setListB] = useState(initialListB);

  const listIndexToSetter = {
    0: setListA,
    1: setListB
  }

  const onlyAValues = useMemo(() => _.difference(_.compact(_.uniq(listA)), _.compact(_.uniq(listB))), [listA, listB])
  const onlyBValues = useMemo(() => _.difference(_.compact(_.uniq(listB)), _.compact(_.uniq(listA))), [listA, listB])
  const inBothValues = useMemo(() => _.intersection(_.compact(_.uniq(listB)), _.compact(_.uniq(listA))), [listA, listB])

  const listIndexToGetter = {
    0:onlyAValues,
    1: onlyBValues,
    2:inBothValues
  }

  useEffect(() => {
    console.log({listA, listB})
  }, [listA, listB])

  const setListByIndex = (value, index) => {
    if(index === -1 || listIndexToSetter === undefined){
      return;
    }
    listIndexToSetter[index](value)
  }

  const getListByIndex = (index) =>{
    return listIndexToGetter[index]
  }

  // Make the context object:
  const listContext = {
    listA,
    listB,
    setListByIndex,
    getListByIndex,
    onlyAValues,
    onlyBValues,
    inBothValues
  };

  // pass the value in provider and return
  return <Context.Provider value={listContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;

Provider.propTypes = {
  listA: PropTypes.array,
  listB: PropTypes.array
};

Provider.defaultProps = {
  listA: [],
  listB: []
};
