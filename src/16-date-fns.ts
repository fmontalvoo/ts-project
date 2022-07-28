import { subDays, format } from 'date-fns';

const date = new Date(1995, 0, 1);

const rta = subDays(date, 10);

const str = format(rta,'dd/MM/yyyy');

console.log(str);