import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-vh-100">
      {/* Hero Section con gradiente */}
      <div className="bg-gradient-primary text-white position-relative overflow-hidden">
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          opacity: 0.9
        }}></div>
        
        {/* Elementos decorativos */}
        <div className="position-absolute" style={{ top: '10%', right: '10%', fontSize: '200px', opacity: 0.1 }}>
          📱
        </div>
        <div className="position-absolute" style={{ bottom: '20%', left: '5%', fontSize: '150px', opacity: 0.1 }}>
          👥
        </div>
        
        <Container className="position-relative py-5">
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="mb-5 mb-lg-0">
              <div className="text-center text-lg-start">
                <h1 className="display-2 fw-bold mb-4" style={{ 
                  background: 'linear-gradient(45deg, #fff, #f8f9fa)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  ContactView
                </h1>
                <h2 className="h2 mb-4 text-light">
                  La revolución en gestión de contactos
                </h2>
                <p className="lead mb-4 text-light opacity-90">
                  Organiza, busca y mantén actualizada tu agenda de contactos con la 
                  plataforma más intuitiva y poderosa del mercado. 
                  <strong className="text-warning"> ¡Completamente gratis!</strong>
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                  <Button 
                    variant="warning" 
                    size="lg" 
                    onClick={() => navigate('/register')}
                    className="px-5 py-3 fw-bold shadow-lg"
                    style={{ borderRadius: '50px' }}
                  >
                    🚀 Comenzar Gratis Ahora
                  </Button>
                  <Button 
                    variant="outline-light" 
                    size="lg" 
                    onClick={() => navigate('/login')}
                    className="px-5 py-3 fw-bold"
                    style={{ borderRadius: '50px' }}
                  >
                    🔑 Ya tengo cuenta
                  </Button>
                </div>
                <div className="mt-4">
                  <small className="text-light opacity-75">
                    ✅ Sin tarjeta de crédito • ✅ Configuración en 30 segundos • ✅ Soporte 24/7
                  </small>
                </div>
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="text-center">
                <div className="bg-white bg-opacity-10 backdrop-blur rounded-4 p-5 border border-white border-opacity-20">
                  <div className="row g-4">
                    <div className="col-6">
                      <div className="bg-white bg-opacity-20 rounded-4 p-4 text-center border border-white border-opacity-30">
                        <div className="display-6 mb-2">👥</div>
                        <h6 className="text-dark fw-bold">Organiza</h6>
                        <small className="text-dark opacity-75">Contactos ilimitados</small>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="bg-white bg-opacity-20 rounded-4 p-4 text-center border border-white border-opacity-30">
                        <div className="display-6 mb-2">🔍</div>
                        <h6 className="text-dark fw-bold">Busca</h6>
                        <small className="text-dark opacity-75">Búsqueda instantánea</small>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="bg-white bg-opacity-20 rounded-4 p-4 text-center border border-white border-opacity-30">
                        <div className="display-6 mb-2">⭐</div>
                        <h6 className="text-dark fw-bold">Favoritos</h6>
                        <small className="text-dark opacity-75">Acceso rápido</small>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="bg-white bg-opacity-20 rounded-4 p-4 text-center border border-white border-opacity-30">
                        <div className="display-6 mb-2">🔒</div>
                        <h6 className="text-dark fw-bold">Seguro</h6>
                        <small className="text-dark opacity-75">Datos protegidos</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Sección de Características */}
      <Container className="py-5">
        <Row className="mb-5">
          <Col lg={12}>
            <div className="text-center">
              <h2 className="display-5 fw-bold text-dark mb-3">
                ¿Por qué elegir <span className="text-primary">ContactView</span>?
              </h2>
              <p className="lead text-muted">
                La plataforma más completa y fácil de usar para gestionar tus contactos
              </p>
            </div>
          </Col>
        </Row>

        <Row className="g-5">
          <Col lg={4} md={6}>
            <div className="text-center p-4 h-100">
              <div className="bg-gradient-primary rounded-4 d-inline-flex align-items-center justify-content-center mb-4 shadow-lg" 
                   style={{ width: '100px', height: '100px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <span className="text-white display-4">👥</span>
              </div>
              <h4 className="h4 mb-3 fw-bold">Gestión Completa</h4>
              <p className="text-muted">
                Crea, edita y organiza todos tus contactos con información detallada: 
                nombre, teléfono, email, dirección y notas personalizadas.
              </p>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="text-center p-4 h-100">
              <div className="bg-gradient-success rounded-4 d-inline-flex align-items-center justify-content-center mb-4 shadow-lg"
                   style={{ width: '100px', height: '100px', background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)' }}>
                <span className="text-white display-4">🔍</span>
              </div>
              <h4 className="h4 mb-3 fw-bold">Búsqueda Inteligente</h4>
              <p className="text-muted">
                Encuentra cualquier contacto en segundos con nuestra búsqueda 
                rápida por nombre, teléfono o email.
              </p>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="text-center p-4 h-100">
              <div className="bg-gradient-warning rounded-4 d-inline-flex align-items-center justify-content-center mb-4 shadow-lg"
                   style={{ width: '100px', height: '100px', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                <span className="text-white display-4">⭐</span>
              </div>
              <h4 className="h4 mb-3 fw-bold">Favoritos</h4>
              <p className="text-muted">
                Marca tus contactos más importantes como favoritos 
                para acceder a ellos rápidamente.
              </p>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="text-center p-4 h-100">
              <div className="bg-gradient-info rounded-4 d-inline-flex align-items-center justify-content-center mb-4 shadow-lg"
                   style={{ width: '100px', height: '100px', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                <span className="text-white display-4">🔒</span>
              </div>
              <h4 className="h4 mb-3 fw-bold">100% Seguro</h4>
              <p className="text-muted">
                Tus datos están protegidos con encriptación de nivel bancario. 
                Solo tú puedes acceder a tu información.
              </p>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="text-center p-4 h-100">
              <div className="bg-gradient-secondary rounded-4 d-inline-flex align-items-center justify-content-center mb-4 shadow-lg"
                   style={{ width: '100px', height: '100px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <span className="text-white display-4">⚡</span>
              </div>
              <h4 className="h4 mb-3 fw-bold">Súper Rápido</h4>
              <p className="text-muted">
                Interfaz optimizada para velocidad. Accede a tus contactos 
                en milisegundos desde cualquier dispositivo.
              </p>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="text-center p-4 h-100">
              <div className="bg-gradient-dark rounded-4 d-inline-flex align-items-center justify-content-center mb-4 shadow-lg"
                   style={{ width: '100px', height: '100px', background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)' }}>
                <span className="text-white display-4">📱</span>
              </div>
              <h4 className="h4 mb-3 fw-bold">Multiplataforma</h4>
              <p className="text-muted">
                Accede desde cualquier dispositivo: web, móvil, tablet. 
                Tus contactos siempre sincronizados.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Sección de Estadísticas */}
      <div className="bg-light py-5">
        <Container>
          <Row className="text-center">
            <Col md={3} className="mb-4">
              <div className="h2 fw-bold text-primary mb-2">10K+</div>
              <p className="text-muted mb-0">Usuarios activos</p>
            </Col>
            <Col md={3} className="mb-4">
              <div className="h2 fw-bold text-success mb-2">1M+</div>
              <p className="text-muted mb-0">Contactos gestionados</p>
            </Col>
            <Col md={3} className="mb-4">
              <div className="h2 fw-bold text-warning mb-2">99.9%</div>
              <p className="text-muted mb-0">Tiempo de actividad</p>
            </Col>
            <Col md={3} className="mb-4">
              <div className="h2 fw-bold text-info mb-2">24/7</div>
              <p className="text-muted mb-0">Soporte disponible</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* CTA Final */}
      <Container className="py-5">
        <Row>
          <Col lg={12}>
            <div className="bg-gradient-primary text-white rounded-4 p-5 text-center position-relative overflow-hidden"
                 style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
              <div className="position-absolute" style={{ top: '-50px', right: '-50px', fontSize: '200px', opacity: 0.1 }}>
                🚀
              </div>
              <div className="position-relative">
                <h2 className="display-5 fw-bold mb-3">¿Listo para revolucionar tu gestión de contactos?</h2>
                <p className="lead mb-4 opacity-90">
                  Únete a miles de usuarios que ya organizan sus contactos de manera inteligente
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <Button 
                    variant="warning" 
                    size="lg" 
                    onClick={() => navigate('/register')}
                    className="px-5 py-3 fw-bold shadow-lg"
                    style={{ borderRadius: '50px' }}
                  >
                    🚀 Crear mi cuenta gratis
                  </Button>
                  <Button 
                    variant="outline-light" 
                    size="lg" 
                    onClick={() => navigate('/login')}
                    className="px-5 py-3 fw-bold"
                    style={{ borderRadius: '50px' }}
                  >
                    🔑 Ya tengo cuenta
                  </Button>
                </div>
                <div className="mt-4">
                  <small className="opacity-75">
                    ✨ Completamente gratis • ⚡ Configuración en 30 segundos • 🔒 Datos seguros
                  </small>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
