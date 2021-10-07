import React, {
  createRef, useState,
} from 'react';
import PropTypes from 'prop-types';

import {
  FieldWrapper, Form, Input, Label, LabelText, SubmitButton,
} from './GlobalFooter.styled';

/* eslint-disable sort-keys */
const fieldNames = {
  'your-name': 'Imię i nazwisko',
  'your-email': 'E-mail',
  'your-phone': 'Telefon',
  'your-message': 'Wiadomość',
};
/* eslint-enable sort-keys */

const { BACKEND_URL } = process.env;

export const ContactForm = ({
  fields, formId,
}) => {
  const FORM_URL = `${BACKEND_URL}/contact-form-7/v1/contact-forms/${formId}`;
  const formRef = createRef();
  const [
    formData,
    setFormData,
  ] = useState(fields);

  const [
    buttonMessage,
    setButtonMessage,
  ] = useState('Wyślij wiadomość');

  console.log(FORM_URL);

  const handleSubmit = event => {
    const { current: formElem } = formRef;
    const isValid = formElem.checkValidity();

    event.preventDefault();

    if (isValid) {
      // fetch()
      setButtonMessage('Wysłano wiadomość');
    } else {
      formElem.reportValidity();
    }
  };

  const handleChange = ({
    target: {
      id, value,
    },
  }) => {
    setFormData(previous => ({
      ...previous,
      [id]: value,
    }));
  };

  const getType = field => {
    switch (field) {
      case 'your-email':
        return 'email';

      case 'your-phone':
        return 'phone';

      default:
        return 'text';
    }
  };

  return (
    <Form ref={formRef}>
      {Object.keys(formData).map(formField => (
        <FieldWrapper
          isSmaller={formField === 'your-email' || formField === 'your-phone'}
          key={formField}
        >
          <Label
            htmlFor={formField}
            isSmaller={!!formData[formField].length}
          >
            <LabelText isSmaller={!!formData[formField].length}>
              {fieldNames[formField]}
            </LabelText>
          </Label>
          <Input
            as={formField === 'your-message' ? 'textarea' : 'input'}
            id={formField}
            onChange={handleChange}
            required
            type={getType(formField)}
            value={formData[formField]}
          />
        </FieldWrapper>
      ))}
      <SubmitButton onClick={handleSubmit}>
        {buttonMessage}
      </SubmitButton>
    </Form>
  );
};
ContactForm.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  formId: PropTypes.number.isRequired,
};

