import { describe, expectTypeOf } from 'vitest';
import type {
  CheckboxGroupOnChangeDetail,
  CheckboxGroupOnChange,
  CheckboxGroupProps,
  CheckboxGroup,
  CheckboxGroupInstance,
} from '@/form-components/CheckboxGroup';

describe('CheckboxGroup', () => {
  expectTypeOf<CheckboxGroupOnChangeDetail>().toBeObject();
  expectTypeOf<CheckboxGroupOnChangeDetail>().toEqualTypeOf<UniHelper.CheckboxGroupOnChangeDetail>();

  expectTypeOf<CheckboxGroupOnChange>().toBeFunction();
  expectTypeOf<CheckboxGroupOnChange>().toEqualTypeOf<UniHelper.CheckboxGroupOnChange>();

  expectTypeOf<CheckboxGroupProps>().toBeObject();
  expectTypeOf<CheckboxGroupProps>().toEqualTypeOf<UniHelper.CheckboxGroupProps>();

  expectTypeOf<CheckboxGroup>().not.toBeAny();
  expectTypeOf<CheckboxGroup>().toEqualTypeOf<UniHelper.CheckboxGroup>();

  expectTypeOf<CheckboxGroupInstance>().not.toBeAny();
  expectTypeOf<CheckboxGroupInstance>().toEqualTypeOf<UniHelper.CheckboxGroupInstance>();
});
