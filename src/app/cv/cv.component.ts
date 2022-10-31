import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  public userInfo: any = {
    firstName: 'Markiian',
    lastName: 'Holets',
    email: 'markgol777@gmail.com',
    phoneNumber: '+390964534566',
    expirience: 'no expirience',
    softSkills:
      [{ name: 'Public speaking', description: 'Public speaking, also called oratory or oration, has traditionally meant the act of speaking face to face to a live audience. Today it includes any form of speaking to an audience, including pre-recorded speech delivered over great distance by means of' },
      { name: 'Confidence', description: `Confidence is a state of being clear-headed either that a hypothesis or prediction is correct or that a chosen course of action is the best or most effective. Confidence comes from a Latin word 'fidere' which means "to trust"; therefore, having self-confidence is` },
      { name: 'Decision-making', description: 'In psychology, decision-making is regarded as the cognitive process resulting in the selection of a belief or a course of action among several possible alternative options. It could be either rational or irrational.' },
      { name: 'Team-Building', description: 'Team building is a collective term for various types of activities used to enhance social relations and define roles within teams, often involving collaborative tasks.' },
      { name: 'Reliability', description: 'the quality of being trustworthy or of performing consistently wel' }],
    TechnicalSkills: ['June Full Stuck Developer', 'html', 'css', 'sccs', 'jquarery', 'dom', 'angular', 'work with databases(mongoDB, postgresql)'],
    exprience: [{ name: 'no expriences', description: 'no exprience' }],
    avatar: 'https://static.wikia.nocookie.net/villains/images/5/54/Light_YagamiHD.jpg/revision/latest?cb=20180414020152'
  }

  constructor() { }

  ngOnInit(): void {
  }

  showInfo(event: any) {
    event.target.nextElementSibling.children[0].children[1].classList.add('show');
    event.target.nextElementSibling.classList.toggle('show');
  }

  showDescription(event: any) {
    event.target.nextElementSibling.classList.toggle('show')
  }

  showProjectAdd() {
    document.querySelector<any>('.project-add').classList.toggle('show');
  }

  addNewExprience() {
    if (this.userInfo.exprience[0].name === 'no expriences') this.userInfo.exprience.shift()
    const project = {
      name: document.querySelector<any>('.project-name').value,
      description: document.querySelector<any>('.short-description').value
    }
    this.userInfo.exprience.push(project)
    document.querySelector<any>('.project-name').value = '';
    document.querySelector<any>('.short-description').value = '';
    console.log(this.userInfo.exprience);
  }
}