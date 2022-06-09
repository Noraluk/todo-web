
import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from '..';
import { ITask } from '../../types/task.types';


const tagTypes = ['Tasks']

const taskService = createApi({
	reducerPath: 'task_service',
	baseQuery: baseQuery,
	tagTypes: tagTypes,
	endpoints: (build) => ({
		getTasks: build.query<ITask[] ,void>({
			query: () => ({url : '/tasks'}),
			providesTags: tagTypes
		}),
		createTask: build.mutation<ITask, Partial<ITask>>({
			query: (body) => ({
				url : '/tasks',
				method: 'POST',
				body,
			}),
			invalidatesTags: tagTypes
		}),
		deleteTask: build.mutation<void, number>({
			query: (index) => ({
				url : `/tasks/${index}`,
				method: 'DELETE',	
			}),
			invalidatesTags: tagTypes,
		})
	})
})

export const { useGetTasksQuery, useCreateTaskMutation, useDeleteTaskMutation } = taskService
export default taskService