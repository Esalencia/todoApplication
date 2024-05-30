import { TestBed } from '@angular/core/testing';

import { AddTasksService } from './add-tasks.service';

describe('AddTasksService', () => {
  let service: AddTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
