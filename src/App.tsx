import React from "react";
import {
  Button,
  Input,
  TextArea,
  FormControl,
  Select,
  SelectItem,
  Checkbox,
  Radio,
  RadioGroup
} from "./components/index";

export default function App() {
  const [selected, setSelected] = React.useState("option1");

  return (
    <div className="">
      <div className="p-4">
        <FormControl
          id="username"
          label="Username"
          helperText="Enter your username"
          isRequired
        >
          <Input id="username" placeholder="Username" />
        </FormControl>

        <FormControl
          id="password"
          label="Password"
          helperText="Enter your password"
          isRequired
          isInvalid
          errorText="Password is required"
        >
          <Input type="password" id="password" placeholder="Password" />
        </FormControl>

        <FormControl
          id="comments"
          label="Comments"
          helperText="Your feedback is important to us"
        >
          <TextArea
            // variant="flushed"
            id="comments"
            placeholder="Enter your comments here..."
          />
        </FormControl>

        <FormControl
          id="select"
          label="Select"
          helperText="This field is Select"
        >
          <Select variant="flushed" id="select" isMulti>
            <SelectItem value="id">Indonesia</SelectItem>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="jp">Japan</SelectItem>
            <SelectItem value="fr">France</SelectItem>
            <SelectItem value="de">Germany</SelectItem>
            <SelectItem value="cn">China</SelectItem>
            <SelectItem value="ru">Russia</SelectItem>
            <SelectItem value="br">Brazil</SelectItem>
            <SelectItem value="in">India</SelectItem>
            <SelectItem value="au">Australia</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
            <SelectItem value="mx">Mexico</SelectItem>
            <SelectItem value="za">South Africa</SelectItem>
            <SelectItem value="kr">South Korea</SelectItem>
            <SelectItem value="it">Italy</SelectItem>
            <SelectItem value="es">Spain</SelectItem>
          </Select>
        </FormControl>

        <FormControl
          id="checkbox"
          label="Checkbox"
          helperText="This field is Checkbox"
        >
          <Checkbox variant="solid" color="primary" />
          <Checkbox variant="outline" color="error" />
          <Checkbox variant="ghost" color="success" />
        </FormControl>

        <FormControl
          id="radio"
          label="Radio"
          helperText="This field is Radio"
        >
          <Radio variant="solid" color="error" name="gender" value="male" label="Male" />
        </FormControl>

        <FormControl
          id="radio-group"
          label="Radio Group"
          helperText="This field is Radio Group"
        >
          <RadioGroup
            options={[
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2", disabled: true },
              { label: "Option 3", value: "option3" },
            ]}
            value={selected}
            onChange={setSelected}
            size="lg"
            color="success"
            variant="outline"
            horizontal
          />
        </FormControl>

        <Button
          color="primary"
          size="md"
          className="mt-4"
          onClick={() => alert("Form submitted!")}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
