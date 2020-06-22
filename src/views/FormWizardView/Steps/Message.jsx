import React from 'react';
import { useFormikContext } from 'formik';

const Survey = () => {
  const {   
    handleBlur,
    handleChange,
    values,
  } = useFormikContext();

  return (
      <div className="stack">
        <label htmlFor="foo" style={{display: `grid`}}>
          What's your message?
          <textarea 
            type="text" 
            id="foo"
            name="foo"
            rows="5"
            value={values.foo}
            onChange={handleChange}
            onBlur={handleBlur}
          /> 
        </label>
      </div>
  );
}

export default Survey;