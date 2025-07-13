import { Button } from "./components/Button";
import { Input } from "./components/Input";


export default function App() {
  return (
    <div className="flex">
      <div className="flex flex-col gap-4">
        <div>
          <Input variant="outline" />
          <Input variant="filled" />
          <Input variant="unstyled" />
          <Input variant="subtle" />
          <Input variant="flushed" />
        </div>
        <div>
          <Input variant="outline" isDisabled />
          <Input variant="filled" isDisabled />
          <Input variant="unstyled" isDisabled />
          <Input variant="subtle" isDisabled />
          <Input variant="flushed" isDisabled />
        </div>
      </div>
      <div>
        <div>
          <Input variant="outline" color="secondary" />
          <Input variant="filled" color="secondary" />
          <Input variant="unstyled"color="secondary" />
          <Input variant="subtle" color="secondary" />
          <Input variant="flushed" color="secondary" />
        </div>
        <div>
          <Input variant="outline" isDisabled color="secondary" />
          <Input variant="filled" isDisabled color="secondary" />
          <Input variant="unstyled" isDisabled color="secondary" />
          <Input variant="subtle" isDisabled color="secondary" />
          <Input variant="flushed" isDisabled color="secondary" />
        </div>
      </div>
      <div>
        <div>
          <Input variant="outline" isInvalid />
          <Input variant="filled" isInvalid />
          <Input variant="unstyled" isInvalid/>
          <Input variant="subtle" isInvalid />
          <Input variant="flushed" isInvalid />
        </div>
        <div>
          <Input variant="outline" isDisabled isInvalid />
          <Input variant="filled" isDisabled isInvalid />
          <Input variant="unstyled" isDisabled isInvalid/>
          <Input variant="subtle" isDisabled isInvalid />
          <Input variant="flushed" isDisabled isInvalid />
        </div>
      </div>
    </div>
  )
}
