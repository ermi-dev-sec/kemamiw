<?php
declare(strict_types=1);

namespace App\Controller\Api;

use App\Controller\AppController;
use App\Controller\Traits\ResponseTrait;

/**
 * @property \App\Model\Table\UsersTable $Users
 *
 * @method \App\Model\Entity\User[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class UsersController extends AppController{

    use ResponseTrait;


    
    public function initialize(): void
    {
        parent::initialize();

        $this->viewBuilder()->disableAutoLayout(true);
    }

     /**
     *
     * @return \Cake\Http\Response|void
     */

     
    public function index(){

        $users['use'] = $this->Users->find()->where(['id' => 2])->toList();

        return $this->setJsonResponse($users);
    }

    public function view($id = null){

        $user = $this->Users->get($id, [
            'contain'=> [],
    ]);

    return $this->setJsonResponse(['user' => $user]);

         
    }




    }
