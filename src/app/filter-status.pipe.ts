import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStatus',
  standalone: false
})
export class FilterStatusPipe implements PipeTransform {

  transform(tasks: any[], status: string): any[] {
    return tasks.filter(task => status == "" || task["status"] == status);
  }

}
