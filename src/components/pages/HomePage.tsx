import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { useNavigateWithLoading } from '@/hooks/useNavigateWithLoading';

import {
    Activity,
    ArrowRight,
    BarChart3,
    CheckCircle,
    Clock,
    FileText,
    Plus,
    Shield,
    TrendingUp,
    User,
    Users,
    Zap,
} from 'lucide-react';

const HomePage = () => {
    const navigateWithLoading = useNavigateWithLoading();

    const handleCreateNew = () => {
        // Navigate to create diagram page or show create modal
        navigateWithLoading('/diagrams');
    };

    const handleViewDiagrams = () => {
        navigateWithLoading('/diagrams');
    };
    return (
        <div className="min-h-screen bg-background">
            {/* Navigation Bar */}
            <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <Activity className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <span className="font-bold text-xl">VPBank Process</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Badge variant="secondary">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Online
                        </Badge>
                        <Avatar className="h-8 w-8">
                            <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                            <AvatarFallback>VP</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </header>

            <div className="container mx-auto px-4 py-8">
                {/* Hero Section */}
                <div className="text-center py-16 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-3xl"></div>
                    <div className="relative z-10">
                        <Badge className="mb-4" variant="outline">
                            <Zap className="h-3 w-3 mr-1" />
                            Next-Generation Process Management
                        </Badge>
                        <h1 className="text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent mb-6">
                            VPBank Process Manager
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                            Transform your business operations with intelligent BPMN diagrams.
                            Design, automate, and optimize processes that drive exceptional results.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="text-lg px-8 py-6"
                                onClick={handleCreateNew}
                            >
                                <Plus className="mr-2 h-5 w-5" />
                                Create New Process
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="text-lg px-8 py-6"
                                onClick={handleViewDiagrams}
                            >
                                <FileText className="mr-2 h-5 w-5" />
                                Explore Library
                            </Button>
                        </div>
                    </div>
                </div>

                <Separator className="my-12" />

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
                    <Card className="relative overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Processes</CardTitle>
                            <BarChart3 className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">24</div>
                            <p className="text-xs text-muted-foreground">+2 from last month</p>
                            <Progress value={75} className="mt-3" />
                        </CardContent>
                    </Card>

                    <Card className="relative overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Active Workflows</CardTitle>
                            <Activity className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">8</div>
                            <p className="text-xs text-muted-foreground">Running smoothly</p>
                            <Progress value={60} className="mt-3" />
                        </CardContent>
                    </Card>

                    <Card className="relative overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Team Members</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">12</div>
                            <p className="text-xs text-muted-foreground">Collaborating</p>
                            <Progress value={90} className="mt-3" />
                        </CardContent>
                    </Card>

                    <Card className="relative overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Efficiency</CardTitle>
                            <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">94%</div>
                            <p className="text-xs text-muted-foreground">+5% this week</p>
                            <Progress value={94} className="mt-3" />
                        </CardContent>
                    </Card>
                </div>

                {/* Feature Cards */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <CardHeader>
                            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <FileText className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-xl">Visual Process Design</CardTitle>
                            <CardDescription>
                                Create stunning BPMN diagrams with our intuitive drag-and-drop
                                interface.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                                    BPMN 2.0 Compliant
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                                    Real-time Collaboration
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                                    Version Control
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <CardHeader>
                            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Users className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-xl">Enterprise Collaboration</CardTitle>
                            <CardDescription>
                                Enable seamless teamwork with advanced sharing and permission
                                controls.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                                    Role-based Access
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                                    Comment System
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                                    Activity Timeline
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <CardHeader>
                            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <Shield className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-xl">Security & Compliance</CardTitle>
                            <CardDescription>
                                Bank-grade security with comprehensive audit trails and compliance
                                features.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-2">
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                                    End-to-end Encryption
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                                    Audit Logging
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                                    SOX Compliance
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Recent Activity */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Clock className="h-5 w-5 mr-2" />
                            Recent Activity
                        </CardTitle>
                        <CardDescription>
                            Latest updates from your team and processes
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <p className="text-sm">
                                        John Doe updated <strong>Customer Onboarding</strong>{' '}
                                        process
                                    </p>
                                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                                </div>
                                <Badge variant="outline">Updated</Badge>
                            </div>

                            <Separator />

                            <div className="flex items-center space-x-4">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback>MS</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <p className="text-sm">
                                        Mary Smith created <strong>Loan Approval Workflow</strong>
                                    </p>
                                    <p className="text-xs text-muted-foreground">1 day ago</p>
                                </div>
                                <Badge variant="outline">Created</Badge>
                            </div>

                            <Separator />

                            <div className="flex items-center space-x-4">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback>RJ</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <p className="text-sm">
                                        Robert Johnson deployed <strong>Payment Processing</strong>{' '}
                                        to production
                                    </p>
                                    <p className="text-xs text-muted-foreground">3 days ago</p>
                                </div>
                                <Badge variant="outline">Deployed</Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>Get started with common tasks</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Button
                                variant="outline"
                                className="h-auto p-4 justify-start"
                                onClick={handleCreateNew}
                            >
                                <Plus className="h-5 w-5 mr-3" />
                                <div className="text-left">
                                    <div className="font-medium">Create Process</div>
                                    <div className="text-sm text-muted-foreground">
                                        Start a new workflow
                                    </div>
                                </div>
                            </Button>

                            <Button
                                variant="outline"
                                className="h-auto p-4 justify-start"
                                onClick={handleViewDiagrams}
                            >
                                <FileText className="h-5 w-5 mr-3" />
                                <div className="text-left">
                                    <div className="font-medium">Browse Library</div>
                                    <div className="text-sm text-muted-foreground">
                                        View all processes
                                    </div>
                                </div>
                            </Button>

                            <Button variant="outline" className="h-auto p-4 justify-start">
                                <User className="h-5 w-5 mr-3" />
                                <div className="text-left">
                                    <div className="font-medium">Invite Team</div>
                                    <div className="text-sm text-muted-foreground">
                                        Add collaborators
                                    </div>
                                </div>
                            </Button>

                            <Button variant="outline" className="h-auto p-4 justify-start">
                                <BarChart3 className="h-5 w-5 mr-3" />
                                <div className="text-left">
                                    <div className="font-medium">View Reports</div>
                                    <div className="text-sm text-muted-foreground">
                                        Analyze performance
                                    </div>
                                </div>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default HomePage;
