import { describe, expectTypeOf } from 'vitest';
import type {
  FormOnSubmitDetailValue,
  FormOnSubmitDetail,
  FormOnSubmit,
  FormOnReset,
  FormProps,
  Form,
  FormInstance,
} from '@/form-components/Form';

describe('Form', () => {
  expectTypeOf<FormOnSubmitDetailValue>().toBeObject();
  expectTypeOf<FormOnSubmitDetailValue>().toEqualTypeOf<UniHelper.FormOnSubmitDetailValue>();

  expectTypeOf<FormOnSubmitDetail>().toBeObject();
  expectTypeOf<FormOnSubmitDetail>().toEqualTypeOf<UniHelper.FormOnSubmitDetail>();

  expectTypeOf<FormOnSubmit>().toBeFunction();
  expectTypeOf<FormOnSubmit>().toEqualTypeOf<UniHelper.FormOnSubmit>();

  expectTypeOf<FormOnReset>().toBeFunction();
  expectTypeOf<FormOnReset>().toEqualTypeOf<UniHelper.FormOnReset>();

  expectTypeOf<FormProps>().toBeObject();
  expectTypeOf<FormProps>().toEqualTypeOf<UniHelper.FormProps>();

  expectTypeOf<Form>().not.toBeAny();
  expectTypeOf<Form>().toEqualTypeOf<UniHelper.Form>();

  expectTypeOf<FormInstance>().not.toBeAny();
  expectTypeOf<FormInstance>().toEqualTypeOf<UniHelper.FormInstance>();
});
