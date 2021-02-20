import React, {useState} from "react";
import styled from "styled-components";
import {IconSearch} from "../../../icons";
import {navigate} from "../../../lib/History";

function SearchBox() {

    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/photos/${value}`);
    }

    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <Button>
                    <IconSearch/>
                </Button>
                <Label htmlFor="">
                    <Input
                        type="text"
                        value={value}
                        onChange={onChange}
                        placeholder={"Search photos"}
                    />
                </Label>
            </Form>
        </Container>
    )
}

const Container = styled.div`
  flex: 1;
`
const Form = styled.form`
  display: flex;
  background: #eeeeee;
  border-radius: 19px;
  padding-left: 6px;s
`
const Label = styled.label`
  display: block;
  height: 38px;
`
const Button = styled.div`
  background: transparent;
  border: 0;
  display: flex;

  &:focus {
    outline: 0;
  }

  svg {
    width: 20px;
  }
`
const Input = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: transparent;
  padding: 8px;

  &:focus {
    outline: 0;
  }
`

export default SearchBox;