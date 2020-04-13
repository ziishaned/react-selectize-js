import "selectize";
import $ from 'jquery';
import 'selectize/dist/css/selectize.css';
import React, {useEffect, useRef} from 'react';

export function Select(props) {
  const selectInput = useRef(null);

  useEffect(() => {
    const {current: selectInputRef} = selectInput;
    const $select = $(selectInputRef);

    $select.selectize(props.options || {});
    $select.on('change', props.onChange);

    return () => {
      selectInputRef.selectize.destroy()
    };
  }, [selectInput, props.onChange]);

  return (
    <select ref={selectInput} value={props.value} className={props.className}>
      {props.children}
    </select>
  );
}
