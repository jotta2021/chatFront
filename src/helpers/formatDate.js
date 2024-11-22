import { format } from "date-fns";

export default function formatDate(value){
return format(value,'HH:mm')
}