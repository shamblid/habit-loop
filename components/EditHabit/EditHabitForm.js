import React from 'react';
import { Button, ButtonText, Input, Picker } from '../basic';
import styled from 'styled-components/native';

const Container = styled.KeyboardAvoidingView`
    padding: 20px;
    background-color: #ffffff;
`;

export default EditHabitForm = props => (
    <Container>
      <Input
          placeholder="Name" 
          placeholderTextColor='#666'
          value={props.values.name}
          returnKeyType='next'
          onBlur={() => props.setFieldTouched('name')}
          onChangeText={props.handleChange('name')}
          onSubmitEditing={() => this.typeInput.focus()}
          error={props.touched.name && props.errors.name}
      />
      <Input
          placeholder="Type"
          placeholderTextColor='#666'
          value={props.values.type}
          returnKeyType="go"
          onBlur={() => props.setFieldTouched('type')}
          onChangeText={props.handleChange('type')}
          ref={input => this.typeInput = input}
          error={props.touched.type && props.errors.type}
      />
      <Picker 
            placeholder={{ label: 'Recurrence', value: 'null', color: '#9EA0A4' }}
            values={'recurrences'}
            onValueChange={props.handleChange('recurrence')}
            value={props.values.recurrence}
            mode={'dropdown'}
            error={props.touched.recurrence && props.errors.recurrence}
        />
      <Button
          onPress={props.handleSubmit}
          disabled={!props.isValid}
      >
        <ButtonText>
          UPDATE
        </ButtonText>
      </Button>
    </Container>
);