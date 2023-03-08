import React, { useReducer } from "react";
import refillingReducer, { initialState } from "./RefillingReportComponents/refillingReducer";
import Numfield from "./RefillingReportComponents/Numfield";
import Textfield from "./RefillingReportComponents/Textfield";
import Textareafield from "./Helpers/Textareafield";
const Refillingreport = () => {
  const [state, dispatch] = useReducer(refillingReducer, initialState);
    const handleFieldChange = (e) => {
      const { name, value } = e.target;
      dispatch({ type: name, payload: value });
      
    };

    const handleKeyPressNumOnly = (e) => {
      const charCode = e.which ? e.which : e.keyCode;
      if (charCode < 48 || charCode > 57) {
        e.preventDefault();
      }
    };

    const handleFocus = (e) => {
      e.target.value='';
      dispatch({ type: e.target.name, payload: isNaN(e.target.value) ? e.target.value : parseFloat(e.target.value) });
    };
    
    const handleBlur = (e) => {
      const { name, value } = e.target;
      dispatch({ type: name, payload: isNaN(value) ? value : parseFloat(value) });
    };
    
  const reportString = (state) => {
    const { dateRef, dealer, pickup, square, small, tenliters, noseal, container,
    capsealBeg, capsealEnd, expenses, duty, outputText, } = state;
    let stringProcess = "";
    stringProcess += `Date: ${dateRef}\n`;
    stringProcess += `dealer :${dealer}\n`;
    stringProcess += `pickup ${pickup}\n`;
    stringProcess += `square :${square}\n`;
    stringProcess += `small ${small}\n`;
    stringProcess += `tenliters ${tenliters}\n`;
    stringProcess += `noseal ${noseal}\n`;
    stringProcess += `container ${container}\n`;
    stringProcess += `capsealBeg ${capsealBeg}\n`;
    stringProcess += `capsealEnd ${capsealEnd}\n`;
    stringProcess += `expenses ${expenses}\n`;
    stringProcess += `duty ${duty}\n`;
    stringProcess += `outputText ${outputText}\n`;

    return stringProcess;
  }

  const outputString = reportString(state)

  return (
    <div>
      <Textfield
        label="Date:"
        name="SET_DATE"
        placeholder="date"
        type="date"
        handleFieldChange={handleFieldChange}
        dispatch={dispatch}
      />
      <Numfield
        label="Dealer:"
        name="SET_DEALER"
        placeholder="dealer"
        handleFieldChange={handleFieldChange}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        handleKeyPress={handleKeyPressNumOnly}
      />
      
      <Numfield
        label="Pickup:"
        name="SET_PICKUP"
        placeholder="pickup"
        handleFieldChange={handleFieldChange}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        handleKeyPress={handleKeyPressNumOnly}
      />
      
      <Numfield
        label="Square:"
        name="SET_SQUARE"
        placeholder="Square"
        handleFieldChange={handleFieldChange}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        handleKeyPress={handleKeyPressNumOnly}
      />
      
      <Numfield
        label="Small:"
        name="SET_SMALL"
        placeholder="Small"
        handleFieldChange={handleFieldChange}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        handleKeyPress={handleKeyPressNumOnly}
      />
      <Numfield
        label="10 Liters:"
        name="SET_TENLITERS"
        placeholder="10 Liters"
        handleFieldChange={handleFieldChange}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        handleKeyPress={handleKeyPressNumOnly}
      />
      <Numfield
        label="No Seal:"
        name="SET_NOSEAL"
        placeholder="No Seal"
        handleFieldChange={handleFieldChange}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        handleKeyPress={handleKeyPressNumOnly}
      />
      <Numfield
        label="Container:"
        name="SET_CONTAINER"
        placeholder="Container"
        handleFieldChange={handleFieldChange}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        handleKeyPress={handleKeyPressNumOnly}
      />
      <Numfield
        label="Capseal Beg:"
        name="SET_CAPSBEG"
        placeholder="Cap Seal Beginning"
        handleFieldChange={handleFieldChange}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        handleKeyPress={handleKeyPressNumOnly}
      />
      <Numfield
        label="Caps End:"
        name="SET_CAPSEND"
        placeholder="Capseal End"
        handleFieldChange={handleFieldChange}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        handleKeyPress={handleKeyPressNumOnly}
      />
      

      <Textfield
        label="Expenses:"
        name="SET_EXPENSES"
        placeholder="Example Load=300 Dina=75"
        handleFieldChange={handleFieldChange}
        type="text"
        dispatch={dispatch}
      />
      <Textfield
        label="Duty:"
        name="SET_DUTY"
        placeholder="Example Richard Dina"
        handleFieldChange={handleFieldChange}
        dispatch={dispatch}
        type="text"
      />
      <Textareafield
        value={outputString}
        label="Report:"
        name="SET_OUTPUTTEXT"
        placeholder="Report"
        onChange={handleFieldChange}
      />
    </div>
  );
};

export default Refillingreport;