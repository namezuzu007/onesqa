 <div class="tabs">
     <div class="ss-box-shadow"></div>
     <?php
        if(!isset($cateActive)) $cateActive = 0;
        foreach([
            'กฎหมายที่เกียวข้อง', 'ศูนย์พัฒนาเด็ก', 'การศึกษาขั้นพื้นฐาน', 'การศึกษาขั้นพื้นฐาน
            วัตถุประสงค์พิเศษ', 
            'กศน', 'ด้านการอาชีวศึกษา', 'ระดับอุดมศึกษา'
        ] as $i=>$d){
    ?>
     <a class="tab tab-main<?php if($i==$cateActive)echo 'active'; ?>" data-tab="<?= $i ?>" href="#">

         <span><?= $d ?></span>
     </a>
     <?php }?>
 </div>