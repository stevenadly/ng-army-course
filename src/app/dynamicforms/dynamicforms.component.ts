import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: "app-dynamicforms",
  templateUrl: "./dynamicforms.component.html",
  styleUrls: ["./dynamicforms.component.css"],
})
export class DynamicformsComponent {
  schoolform: FormGroup;

  school1 = {
    schoolName: "school 1",
    totalStudentsCount: "6",
    classRooms: [
      {
        studentsCount: "3",
        classRoomNumber: "5",
        subjects: [
          { subjectName: "arabic", studentsCount: "60" },
          { subjectName: "eng", studentsCount: "30" },
          { subjectName: "math", studentsCount: "100" },
        ],
      },
    ],
  };

  constructor(private fb: FormBuilder) {
    this.schoolform = this.creatForm("init");
    setTimeout(() => {
      // this.schoolform.patchValue(this.school1);

      for (let i = 0; i < this.school1.classRooms.length; i++) {
        this.creatClassRoom();
        for (const subject of this.school1.classRooms[i].subjects) {
          this.addSubject(i);
        }
      }
      this.schoolform.patchValue(this.school1);
    }, 2000);

    // setTimeout(() => {
    //   this.schoolform.reset();
    // }, 5000);
  }

  creatForm(itemtype: string) {
    let formItem = new FormGroup({});
    switch (itemtype) {
      case "init":
        formItem = this.fb.group({
          schoolName: "",
          totalStudentsCount: "",
          classRooms: this.fb.array([]),
        });
        break;

      case "classroom":
        formItem = this.fb.group({
          studentsCount: "",
          classRoomNumber: "",
          subjects: this.fb.array([]),
        });
        break;

      case "subject":
        formItem = this.fb.group({
          subjectName: "",
          studentsCount: "",
        });
        break;
    }
    return formItem;
  }

  get getForm() {
    return this.schoolform.controls;
  }
  /*  ====================================== get class room*/
  getClassRooms(): FormArray {
    // debugger;
    return this.schoolform.get("classRooms") as FormArray;
  }
  /*  ======================================  class room*/

  creatClassRoom() {
    this.getClassRooms().push(this.creatForm("classroom"));
  }
  /* ----------------------------------------delete class room */

  deleteClassRoom(ind: number) {
    this.getClassRooms().removeAt(ind);
    console.log("ind==", ind);
  }
  // ==================================addSubject
  getSubjects(i: number): FormArray {
    return this.getClassRooms().at(i).get("subjects") as FormArray;
  }

  addSubject(classRoomIndex: number) {
    this.getSubjects(classRoomIndex).push(this.creatForm("subject"));
  }

  deleteSubject(classRoomIndex: number, subjectIndex: number) {
    this.getSubjects(classRoomIndex).removeAt(subjectIndex);
  }

  resetAll() {
    this.schoolform.reset();
    // this.getForm.clear();
    debugger;
    this.getClassRooms().removeAt(0);

    debugger;
    this.deleteClassRoom(0);
  }
}
