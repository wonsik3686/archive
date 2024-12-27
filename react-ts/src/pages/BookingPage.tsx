import { useForm, ControllerRenderProps } from 'react-hook-form';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/Card';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/Form';

interface BookingFormValues {
  name: string;
}

function BookingPage() {
  const form = useForm<BookingFormValues>();
  const { control } = form;

  const onSubmit = (data: BookingFormValues) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>BookingPage</h1>
      <Card>
        <CardHeader>
          <CardTitle>인원/좌석</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={control}
                name="name"
                render={({
                  field,
                }: {
                  field: ControllerRenderProps<BookingFormValues, 'name'>;
                }) => (
                  <FormItem>
                    <FormLabel>이름</FormLabel>
                    <input {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default BookingPage;
