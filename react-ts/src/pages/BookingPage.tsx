import { useForm } from 'react-hook-form';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
function BookingPage() {
  const { control, handleSubmit } = useForm();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>BookingPage</h1>
      <Card>
        <CardHeader>
          <CardTitle>인원/좌석</CardTitle>
        </CardHeader>
        <CardContent>
          <Form>
            <FormField
              control={control}
              name="name"
              render={({ field }) => <Input {...field} />}
            />
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default BookingPage;
