import {Component, OnInit} from '@angular/core';
import {WebclientService} from "./webclient.service";
import {Conector} from "./conector";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap, tap} from "rxjs";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {


  conectors: Conector[] = [];

  saveConectorr: Conector = new Conector();

  constructor(private service: WebclientService, private route: Router) {
  }

  ngOnInit(): void {


    this.service.getAllClients().subscribe(
      data => {
        this.conectors = data;
      }
    );


  }


  buscar(id: string) {

    this.service
      .downloadLink(id)
      .subscribe(
        (resp: HttpResponse<Blob>) => {
          console.log(resp.headers.get('content-disposition'));
          let data = resp.url;
          // @ts-ignore
          window.open(data, '_blank');

        });

  }


  deleteConector(id: string) {
    this.service.deleteConnector(id).subscribe(
      data => {
        this.conectors = this.conectors.filter(conector => conector.id !== id);

      }
    );
  }


  saveConector() {





    this.service.saveConector(this.saveConectorr).subscribe(
      data => {
        this.route.navigate(['/body']).then(r => {
          this.ngOnInit();

        });

        this.saveConectorr = data;
        this.saveConectorr = new Conector();


      }
    );
  }

}


/*


    /* this.service.download(id).subscribe(response => {
       const blob = new Blob([response], {type: 'application/text'});
       const url = window.URL.createObjectURL(blob);
       window.open(url);
     });*/
