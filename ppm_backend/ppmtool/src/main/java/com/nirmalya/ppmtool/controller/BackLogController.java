package com.nirmalya.ppmtool.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nirmalya.ppmtool.domain.Project;
import com.nirmalya.ppmtool.domain.ProjectTask;
import com.nirmalya.ppmtool.service.ProjectTaskService;
import com.nirmalya.ppmtool.service.ValidationErrorService;

/**
 * @author Nirmalya,
 * @param backlogId = project identifier
 */
@RestController
@RequestMapping("/api/backlog")
@CrossOrigin
public class BackLogController {

	private ProjectTaskService projectTaskService;
	private ValidationErrorService validationErrorService;

	public BackLogController(ProjectTaskService projectTaskService, ValidationErrorService validationErrorService) {
		super();
		this.projectTaskService = projectTaskService;
		this.validationErrorService = validationErrorService;
	}

	@PostMapping("/{backlog_id}")
	public ResponseEntity<?> addProjectTasktoBacklog(@Valid @RequestBody ProjectTask projectTask, BindingResult result,
			@PathVariable String backlog_id) {
		ResponseEntity<?> errorMap = validationErrorService.mapValidationErrorService(result);
		if (errorMap != null)
			return errorMap;
		ProjectTask aProjectTask = projectTaskService.addProjectTask(backlog_id, projectTask);

		return new ResponseEntity<ProjectTask>(aProjectTask, HttpStatus.CREATED);
	}

	@GetMapping("/{backlog_id}")
	public List<ProjectTask> getProjectBacklogDetails(@PathVariable String backlog_id) {
		return projectTaskService.findBacklogDetailsByProjectIdentifier(backlog_id);
	}

	/*
	 * @GetMapping("{backlog_id}/status/{project_status}") public List<ProjectTask>
	 * getProjectBackLogDetailsByStatus(@PathVariable String
	 * backlog_id,@PathVariable String project_status) { return
	 * projectTaskService.findProjectBackLogDetailsByStatus(backlog_id,
	 * project_status); }
	 */

	@GetMapping("/{backlog_id}/{project_sequence}")
	public ResponseEntity<?> getProjectTask(@PathVariable String backlog_id, @PathVariable String project_sequence) {

		ProjectTask projectTask = projectTaskService.findProjectTaskByProjectSequence(backlog_id, project_sequence);
		return new ResponseEntity<ProjectTask>(projectTask, HttpStatus.OK);
	}

	@PutMapping("/{backlog_id}/{project_sequence}")
	public ResponseEntity<?> updateProjectTaskBySequence(@Valid @RequestBody ProjectTask projectTask,BindingResult result,
			@PathVariable String backlog_id, @PathVariable String project_sequence ) {
		ResponseEntity<?> errorMap = validationErrorService.mapValidationErrorService(result);
		if (errorMap != null)
			return errorMap;
		ProjectTask updatedTask = projectTaskService.updateProjectTaskBySequence(projectTask,backlog_id,project_sequence);

        return new ResponseEntity<ProjectTask>(updatedTask,HttpStatus.OK);
		
	}
	
	 @DeleteMapping("/{backlog_id}/{project_sequence}")
	    public ResponseEntity<?> deleteProjectTaskByProjectSequence(@PathVariable String backlog_id, @PathVariable String project_sequence){
	        projectTaskService.deleteProjectTaskByProjectSequence(backlog_id, project_sequence);
	        return new ResponseEntity<String>("Project Task "+project_sequence+" was deleted successfully", HttpStatus.OK);
	    }

}