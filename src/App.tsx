import {
  Button,
  Input,
  TextArea,
  FormControl,
  Select,
  SelectItem,
} from "./components/index";

export default function App() {
  return (
    <div className="">
      <div className="p-4">
        <FormControl
          id="username"
          label="Username"
          helperText="Enter your username"
          isRequired
          size="md"
        >
          <Input variant="flushed" id="username" placeholder="Username" />
        </FormControl>

        <FormControl
          id="password"
          label="Password"
          helperText="Enter your password"
          isRequired
          isInvalid
          errorText="Password is required"
          size="md"
        >
          <Input type="password" id="password" placeholder="Password" />
        </FormControl>

        <FormControl
          id="comments"
          label="Comments"
          helperText="Your feedback is important to us"
          size="xl"
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
          size="xl"
        >
          <Select variant="flushed" isFullWidth id="select">
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
