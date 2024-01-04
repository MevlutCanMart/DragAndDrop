import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop-box',
  standalone: true,
  imports: [],
  templateUrl: './drag-and-drop-box.component.html',
  styleUrl: './drag-and-drop-box.component.scss'
})
export class DragAndDropBoxComponent {
  allowDrop (event:any){
    event.preventDefault() // tarayıcı varsayılan olarak bir ögenin başka bir ögenin üzerine bırakılmasına izin vermez preventDefault kullanarak bu durumu iptal ettik.
  }

  drag(event:any){
    event.dataTransfer.setData("text",event.target.id) // dataTransfer taşınacak ögenin özelliklerini ve bu ögenin verilerin hedefe iletilmesini sağlar
  }                                                    // setData yöntemi, sürüklenen öğenin dataTransfer nesnesine belirli bir formatta veri eklemek için kullanılır.

  drop(event:any){
    event.preventDefault();
    var data = event.dataTransfer.getData("text")  //                       //getData yöntemi, sürüklenen öğenin dataTransfer nesnesinden belirli bir formatta veriyi almak için kullanılır.
    event.target.appendChild(document.getElementById(data))
  }

  
}

