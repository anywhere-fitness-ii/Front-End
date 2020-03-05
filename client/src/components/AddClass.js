

import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { useForm } from "react-hook-form";
import {StyledForm, StyledInput, StyledSelect} from '../styles/Styles';
import {axiosWithAuth} from '../utils/axiosWithAuth';


const AddClass = props => {

  const { register, handleSubmit, errors, reset } = useForm();
  const [initialValue, setInitialValue] = useState(props.cardToUpdate);
  const [button, setButton] = useState('Submit');
  const [flag, setFlag] = useState(false);

  const onSit = (addNewCard) => {

    if (props.editing) {

      console.log(addNewCard);

      axiosWithAuth()
      .put(`/classes/${props.cardToUpdate.id}`, addNewCard)
      .then(res => {console.log(res); window.location.reload(false);})
      .catch(err => err);

    } else {

      axiosWithAuth()
        .post(`/classes`, addNewCard)
        .then(res => console.log(res))
        .catch(err => err)
      console.log('I added this card', addNewCard)
      props.setDependencyState(true);
      reset()

    }
  }


  useEffect(() => {

    if (props.editing && flag == false) {
      setInitialValue(props.cardToUpdate);
      setFlag(true);
    }

    if (props.editing) {
      setButton('Edit');
    } else {
      setButton('Submit')
    }

  });

  const setData = e => {

    console.log('eeee: ' + e.target.value + ' - ' + e.target.name);

    console.log(initialValue);

    setInitialValue(prevState => ({
      initialValue: {
        [e.target.name]: e.target.value
      }
    }));

  }

  const setOption = (option) => {

    console.log(option);
    setInitialValue(prevState => ({
      initialValue: {
        ['class_intensity']: option
      }
    }));
}

  return (
    <>
    <StyledForm onSubmit={handleSubmit(onSit)}>
      <StyledInput ref={register({required: true, maxLength: 20})} onChange={e => {setData(e)}} type="text" name="class_name" placeholder="Name" value={initialValue.class_name}/>
      {errors.class_name && <p>Required</p>}
      {errors.class_name && errors.class_name.type === "maxLength" && <p>Must be less than 20 characters.</p>}

      <StyledInput ref={register({required: false, maxLength: 20})} onChange={e => {setData(e)}} type="text" name="class_type" placeholder="Class Type" value={initialValue.class_type}/>

      <StyledInput ref={register({required: true, maxLength: 20})} onChange={e => {setData(e)}} type="text" name="class_date" placeholder="Date" value={initialValue.class_date}/>
      {errors.class_date && <p>Required</p>}
      {errors.class_date && errors.class_date.type === "maxLength" && <p>Must be less than 20 characters.</p>}

      <StyledInput ref={register({required: true, maxLength: 10})} onChange={e => {setData(e)}} type="text" name="class_start_time" placeholder="Start Time" value={initialValue.class_start_time}/>
      {errors.class_start_time && <p>Required</p>}
      {errors.class_start_time && errors.class_start_time.type === "maxLength" && <p>Must be less than 20 characters.</p>}

      <StyledInput ref={register({required: false, maxLength: 10})} onChange={e => {setData(e)}} type="text" name="class_duration" placeholder="Duration" value={initialValue.class_duration}/>
      
      <StyledInput ref={register({required: true, maxLength: 10})} onChange={e => {setData(e)}} type="text" name="class_location" placeholder="Location" value={initialValue.class_location}/>
      {errors.class_location && <p>Required</p>}
      {errors.class_location && errors.class_location.type === "maxLength" && <p>Must be less than 20 characters.</p>}


      <StyledSelect value={initialValue.class_intensity} ref={register({required: false})} name="class_intensity" onChange={e => {setData(e)}}>
        <option value="High" onClick={() => {setOption('High')}}>High</option>
        <option value="Medium" onClick={() => {setOption('Medium')}}>Medium</option>
        <option value="Low" onClick={() => {setOption('Low')}}>Low</option>
      </StyledSelect>

      <StyledInput ref={register({required: false})} onChange={e => {setData(e)}} type="text" name="registered_participants" placeholder="Registered" value={initialValue.registered_participants} />


      <StyledInput ref={register({required: false})} onChange={e => {setData(e)}} type="text" name="class_max_participants" placeholder="Max Participants" value={initialValue.class_max_participants}/>

      <button type="submit">{button}</button>
    </StyledForm>
    </>
  )
}

export default AddClass;

