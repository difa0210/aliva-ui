import { Button, Input, TextArea, FormControl } from "./components/index";

export default function App() {
  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <FormControl
          id="username"
          label="Username"
          helperText="Enter your username"
          isRequired
          size="md"
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
          size="md"
        >
          <Input type="password" id="password" placeholder="Password" />
        </FormControl>

        <FormControl
          id="comments"
          label="Comments"
          helperText="Your feedback is important to us"
          size="md"
        >
          <TextArea id="comments" placeholder="Enter your comments here..." />
        </FormControl>

        <Button color="primary" size="md" className="mt-4" onClick={() => alert("Form submitted!")}>
          Submit
        </Button>
      </div>
    </div>
  )
}
